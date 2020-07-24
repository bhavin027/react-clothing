import React from 'react';
import { connect } from 'react-redux';

//import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	AddButton,
	BackgroundImage,
	NameContainer,
	PriceContainer
  } from './collection-item.styles';

const CollectionItem = ( {item, addItem} ) => {
	const { name, price, imageUrl } = item;
	return (
	<CollectionItemContainer>
		<BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
		<CollectionFooterContainer>
			<NameContainer className='name'>{name}</NameContainer>
			<PriceContainer className='price'>{price}</PriceContainer>
		</CollectionFooterContainer>
		<AddButton onClick={() => addItem(item)} inverted>
			Add to Cart
		</AddButton>
	</CollectionItemContainer>
	)
};

const mapDispatachToProps = dispatch =>({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatachToProps)(CollectionItem);