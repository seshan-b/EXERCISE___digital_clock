// Get reference
const clock = document.querySelector('.clock')

const clockTick = () => {
	const now = new Date()

	const getHour = now.getHours()
	const getMinutes = now.getMinutes()
	const getSeconds = now.getSeconds()
	const getMilliseconds = now.getMilliseconds()

	// Test clock on console
	console.log(
		`Get time: ${getHour}:${getMinutes}:${getSeconds}:${getMilliseconds}`
	)

	const htmlTemplate = `
        <span> ${getHour}</span>:
        <span>${getMinutes}</span>:
        <span>${getSeconds}</span>::
        <span>${getMilliseconds}</span>
    `

	// Place into HTML
	clock.innerHTML = htmlTemplate
}

setInterval(clockTick, 10)
