const modal = document.getElementById("modal")
const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")

closeModal.addEventListener("click", hideModal)
openModal.addEventListener("click", contactDisplay)

function hideModal() {
	modal.style.display = "none"
}

function contactDisplay() {
	modal.style.display = "block"
}


