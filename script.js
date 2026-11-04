//your JS code here. If required.
const container = document.querySelector(".container");

for (let i = 0; i < 800; i++) {
	const box = document.createElement("div");
	box.classList.add("square");
	container.appendChild(box);
}


const squares = document.querySelectorAll(".square");
squares.forEach((box)=>{
	box.addEventListener("mouseover", ()=>{

		const r = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		
		box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	});
	setInterval(()=>{
		box.style.backgroundColor = `transparent`;
		box.style.transition = `1s ease`;
	}, 1000)
	// box.addEventListener("mouseleave", ()=>{
	// 	box.style.backgroundColor = `transparent`;
	// 	box.style.transition = `1s ease`
	// });
});