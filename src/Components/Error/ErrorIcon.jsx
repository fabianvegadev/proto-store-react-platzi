// eslint-disable-next-line react/prop-types
const ErrorIcon = ({ size, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<style>
			{
				"@keyframes n-info-hex{0%,to{transform:rotate(0deg);transform-origin:center}10%,90%{transform:rotate(2deg)}20%,40%,60%{transform:rotate(-6deg)}30%,50%,70%{transform:rotate(6deg)}80%{transform:rotate(-2deg)}}.prefix__n-info-hex{animation:n-info-hex .8s cubic-bezier(.455,.03,.515,.955) both infinite}"
			}
		</style>
		<g className="prefix__n-info-hex">
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeWidth={1.5}
				d="M12 8.143v4.55"
			/>
			<circle cx={12} cy={14.957} r={0.9} fill="#000" />
		</g>
		<path
			stroke="#ff0000"
			strokeWidth={1.5}
			d="M19.994 14.753a1 1 0 0 1-.282.712l-4.007 4.134a1 1 0 0 1-.702.304l-5.756.09a1 1 0 0 1-.712-.281l-4.134-4.007a1 1 0 0 1-.304-.702l-.09-5.756a1 1 0 0 1 .281-.712l4.007-4.134a1 1 0 0 1 .702-.304l5.756-.09a1 1 0 0 1 .712.281l4.134 4.007a1 1 0 0 1 .304.702l.09 5.756z"
			className="prefix__n-info-hex"
			style={{
				animationDelay: "1s",
			}}
		/>
	</svg>
);
export { ErrorIcon };
