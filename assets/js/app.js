const MarkAsRead = document.getElementById("mark_all_read")
const ItemsUnread = document.querySelectorAll(".nts__list--item")
const RemoveClass = 'nts__unread'

/**
 * Función para marcar todos como leídos
*/
MarkAsRead.onclick = () => ItemsUnread.forEach( ItemUnread => {
	document.querySelector(".badge").innerHTML = 0;
	ItemUnread.classList.remove(RemoveClass)
})

/**
 * Función para marcar como leído de a uno
*/
ItemsUnread.forEach( ItemUnread => {
	ItemUnread.onclick = e => {
		let badge = parseInt(document.querySelector(".badge").textContent)
		let ParentEl = e.target.parentElement;
		let Item = (ParentEl.classList.value === 'item__data') ? ParentEl.parentElement.classList : ParentEl.classList;
		Item.remove(RemoveClass)
		document.querySelector(".badge").innerHTML = badge - 1;
	}
})