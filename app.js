"use strict";

(() => {
  const WHATSAPP = "5511983842947";

  const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const grid = document.querySelector("#products");
  const count = document.querySelector("#count");
  const lengthSelect = document.querySelector("#length");
  const categoryButtons = document.querySelectorAll("[data-category]");

  const dialog = document.querySelector("#detail");
  const closeButton = document.querySelector("#close-detail");

  const detailImage = document.querySelector("#detail-image");
  const detailImageError = document.querySelector("#detail-image-error");
  const detailCode = document.querySelector("#detail-code");
  const detailTitle = document.querySelector("#detail-title");
  const detailSize = document.querySelector("#detail-size");
  const detailPrice = document.querySelector("#detail-price");
  const detailBuy = document.querySelector("#detail-buy");

  let selectedCategory = "todos";
  let lastDetailButton = null;

  function money(cents) {
    return currency.format(cents / 100);
  }

  function productName(product) {
    return product.name + (
      product.length ? ` — ${product.length} cm` : ""
    );
  }

  function whatsappLink(message) {
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  function productLink(product) {
    const message = [
      "Olá, Neves Pratas!",
      "",
      "Tenho interesse nesta peça:",
      productName(product),
      `Código: ${product.id}`,
      `Valor no catálogo: ${money(product.priceCents)}`,
      "",
      "Pode confirmar a disponibilidade, o frete e a forma de pagamento?"
    ].join("\n");

    return whatsappLink(message);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (text !== undefined) {
      node.textContent = text;
    }

    return node;
  }

  function createCard(product) {
    const article = element("article", "product");

    const photoButton = element("button", "product-image");
    photoButton.type = "button";
    photoButton.setAttribute(
      "aria-label",
      `Ver detalhes: ${productName(product)}`
    );

    const image = element("img");
    image.alt = productName(product);
    image.loading = "lazy";
    image.decoding = "async";

    const imageError = element(
      "span",
      "image-error",
      "Foto indisponível no momento"
    );
    imageError.hidden = true;

    image.addEventListener("error", () => {
      image.hidden = true;
      imageError.hidden = false;
    });

    image.src = product.image;

    const tag = element(
      "span",
      "tag",
      product.length ? `${product.length} cm` : product.category.toUpperCase()
    );

    const expand = element("span", "expand", "+");
    expand.setAttribute("aria-hidden", "true");

    photoButton.append(image, imageError, tag, expand);

    photoButton.addEventListener("click", () => {
      showDetails(product, photoButton);
    });

    const categoryLabel = product.category.toUpperCase();

    const meta = element(
      "p",
      "product-meta",
      `${categoryLabel} · ${product.id}`
    );

    const title = element("h3", "", product.name);

    const price = element(
      "p",
      "product-price",
      money(product.priceCents)
    );

    const buy = element("a", "button", "Pedir no WhatsApp ↗");
    buy.href = productLink(product);
    buy.target = "_blank";
    buy.rel = "noopener";
    buy.setAttribute(
      "aria-label",
      `Pedir ${productName(product)} no WhatsApp`
    );

    article.append(photoButton, meta, title, price, buy);

    return article;
  }

  function render() {
    const selectedLength = lengthSelect.value;

    const filtered = PRODUCTS.filter(product => {
      const categoryMatches =
        selectedCategory === "todos" ||
        product.category === selectedCategory;

      const lengthMatches =
        selectedLength === "todos" ||
        product.length === Number(selectedLength);

      return categoryMatches && lengthMatches;
    });

    count.textContent =
      `${filtered.length} ${filtered.length === 1 ? "peça" : "peças"}`;

    const fragment = document.createDocumentFragment();

    if (filtered.length === 0) {
      fragment.append(
        element(
          "p",
          "empty",
          "Nenhuma peça nesta combinação. Escolha outro comprimento."
        )
      );
    } else {
      filtered.forEach(product => {
        fragment.append(createCard(product));
      });
    }

    grid.replaceChildren(fragment);
  }

  function showDetails(product, trigger) {
    lastDetailButton = trigger;

    detailTitle.textContent = product.name;

    detailCode.textContent =
      `${product.category.toUpperCase()} · ${product.id}`;

    detailSize.textContent = product.length
      ? `Comprimento: ${product.length} cm`
      : product.category === "pingente"
        ? "Pingente vendido sem corrente. Confirme as medidas pelo WhatsApp."
        : product.category === "brinco"
          ? "Zircônia redonda. Confirme a quantidade e a disponibilidade pelo WhatsApp."
          : "Consulte as medidas disponíveis pelo WhatsApp.";

    detailPrice.textContent = money(product.priceCents);
    detailBuy.href = productLink(product);

    detailImage.hidden = false;
    detailImageError.hidden = true;
    detailImage.alt = productName(product);
    detailImage.src = product.image;

    if (!dialog.open) {
      dialog.showModal();
      document.body.classList.add("modal-open");
    }
  }

  detailImage.addEventListener("error", () => {
    detailImage.hidden = true;
    detailImageError.hidden = false;
  });

  detailImage.addEventListener("load", () => {
    detailImage.hidden = false;
    detailImageError.hidden = true;
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");

    if (lastDetailButton) {
      lastDetailButton.focus();
    }
  });

  dialog.addEventListener("click", event => {
    if (event.target !== dialog) {
      return;
    }

    const bounds = dialog.getBoundingClientRect();

    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;

    if (clickedOutside) {
      dialog.close();
    }
  });

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedCategory = button.dataset.category;

      categoryButtons.forEach(item => {
        item.setAttribute(
          "aria-pressed",
          String(item === button)
        );
      });

      lengthSelect.value = "todos";
      lengthSelect.disabled = !["todos", "corrente"].includes(selectedCategory);

      render();
    });
  });

  lengthSelect.addEventListener("change", render);

  document.querySelectorAll("[data-contact]").forEach(link => {
    link.href = whatsappLink(
      "Olá, Neves Pratas! Gostaria de saber mais sobre as peças do catálogo."
    );
  });

  render();
})();
