// Shopping cart mockup data
const cart = [];
let total = 0;

const cartList = document.getElementById("cart-list");
const totalEl = document.getElementById("total");
const clearBtn = document.getElementById("clear-cart");
const calcTotal = document.getElementById("calcTotal");
const qtyInput = document.getElementById("qty");
const addonSelect = document.getElementById("addon");

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
  totalEl.textContent = total.toFixed(2);
}

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    cart.push({ name, price });
    total += price;
    renderCart();
  });
});

// Pricing calculator
function updateCalculator() {
  const qty = Math.max(1, Number(qtyInput.value) || 1);
  const addon = Number(addonSelect.value);
  const basePrice = 99;
  const result = qty * basePrice + addon;
  calcTotal.textContent = result.toFixed(2);
}

if (qtyInput && addonSelect && calcTotal) {
  qtyInput.addEventListener("input", updateCalculator);
  addonSelect.addEventListener("change", updateCalculator);
  updateCalculator();
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    cart.length = 0;
    total = 0;
    renderCart();
  });
}
