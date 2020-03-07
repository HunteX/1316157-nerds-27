let isModalOpen = false;

function toggleModal() {
  const modalElement = document.querySelector(".modal-write-us");

  modalElement.style.display = isModalOpen ? "none" : "block";
  isModalOpen = !isModalOpen;
}
