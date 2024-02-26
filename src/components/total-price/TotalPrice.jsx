const TotalPrice = ({ price }) => {
	const totalPrice = price * 1.21;

	return <h2>{`El precio total con IVA es: ${totalPrice} euros`}</h2>;
};

export default TotalPrice;
