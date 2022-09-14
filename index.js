const modal = document.getElementById("modal")
const openModal = document.getElementById("open-modal")
const closeModal = document.getElementById("close-modal")
const overlay = document.getElementById("overlay")
overlay.style.display = "none"

closeModal.addEventListener("click", hideModal)
openModal.addEventListener("click", contactDisplay)

function hideModal() {
	overlay.style.display = "none"
}

function contactDisplay() {
	overlay.style.display = "block"
}


