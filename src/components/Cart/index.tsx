import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total: {parseToBrl(getTotalPrice(items))}{' '}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              onClick={goToCheckout}
              title="Clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho esta vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
