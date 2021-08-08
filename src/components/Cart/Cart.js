import React, { Component } from 'react';
import Title from '../Title.js';
import CartColumns from './CartColumns.js';
export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                <CartColumns />
            </section>
        )
    }
}
