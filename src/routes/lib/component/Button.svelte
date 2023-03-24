<script lang="ts">
	// button의 type 관련 prop으로 3가지 타입으로 정의했고, 바뀌면 안되는 값이기 때문에 const로 선언
	export const type: 'button' | 'submit' | 'reset' = 'button'

	// button의 비활성여부, default false
	export let disabled = false

	// on:Click 함수
	export let onclick: (event: MouseEvent) => void

	/**
	 * ripple animation을 위한 함수
	 * @param event
	 */
	const createRipple = (event: MouseEvent) => {
		//이벤트 버튼에 접근
		const button = event.currentTarget as HTMLElement

		// 클릭 시 작동할 원형 span 생성
		const circle = document.createElement('span')
		const diameter = Math.max(button.clientWidth, button.clientHeight)
		const radius = diameter / 2

		// define the remaining properties we need for ripple
		circle.style.width = circle.style.height = `${diameter}px`
		circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
		circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
		circle.classList.add('ripple')

		// remove ripple before executing the next one
		const ripple = button.getElementsByClassName('ripple')[0]
		if (ripple) ripple.remove()

		// append the span as a child the button
		button.appendChild(circle)
	}

	// button의 기본 style & 추후 필요 시 적용
	// export const variant: 'text' | 'contained' | 'outlined' = 'contained'
</script>

<button {type} {disabled} on:click={onclick} on:click={createRipple}><slot /></button>

<style>
	button {
		background-color: #d22027;
		color: #ffffff;
		border: none;
		border-radius: 6px;
		box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
		gap: 4px;
		display: inline-flex;
		min-width: 64px;
		justify-content: center;
		vertical-align: center;
		align-items: center;
		padding: 10px 12px;
		cursor: pointer;
		line-height: 40px;
		outline: 0;
		overflow: hidden;
		padding: 0 20px;
		pointer-events: auto;
		position: relative;
		text-align: center;
		touch-action: manipulation;
		width: 10rem;
		transition: box-shadow 0.2s;
		font-size: 1rem;
	}

	button:hover {
		box-shadow: rgba(253, 76, 0, 0.5) 0 1px 7px;
	}

	/* :global()로 선언해주어야 작동한다 */
	/* Scoped global CSS */
	button > :global(.ripple) {
		position: absolute; /* The absolute position we mentioned earlier */
		border-radius: 50%;
		transform: scale(0);
		animation: ripple 1s linear;
		background-color: rgba(255, 255, 255, 0.7);
		filter: blur(2px);
	}

	button:active {
		background-color: rgb(226, 107, 87);
	}

	@keyframes ripple {
		to {
			transform: scale(4);
			opacity: 0;
		}
	}
</style>
