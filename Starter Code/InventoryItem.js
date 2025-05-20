function InventoryItem ({ name, type, quantity = 0, price = 0 })
{
	// To calculate inventory these are set
	const totalValue = quantity * price;
	const isLowStock = quantity <= 5; 
	const isHighValue = totalValue > 1000;

	return (
		<div style ={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
			<h2>{name}</h2>
			<p><strong>Type:</strong> {type} </p>
			<p><strong>Quantity:</strong> {quantity} </p>
			<p><strong>Price:</strong> {price} </p>

			{isLowStock && (
				<Message> Warning!! Low on Stock </Message>
			)}

			{isHighValue && (
				<Message> Caution: High Value Item, Protect from theives and Raccoons </Message>
			)}

		</div>
	);
}
