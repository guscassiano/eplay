import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import { Link } from 'react-router-dom'

import * as S from './styles'

import cartIcon from '../../assets/images_M35/carrinho.svg'
import logo from '../../assets/images_M35/logo.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <Link to="/">
              <h1>
                <img src={logo} alt="Logo Eplay" />
              </h1>
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link
                    title="Clique aqui para acessar a página de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de Em breve"
                    to="/#coming-soon"
                  >
                    Novidades
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de Promoções"
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton role="button" onClick={openCart}>
            {items.length} <span> - Produto(s)</span>
            <img src={cartIcon} alt="Carrinho" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link
                title="Clique aqui para acessar a página de categorias"
                to="/categories"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a seção de Em breve"
                to="/#coming-soon"
                onClick={() => setIsMenuOpen(false)}
              >
                Novidades
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                title="Clique aqui para acessar a seção de Promoções"
                to="/#on-sale"
                onClick={() => setIsMenuOpen(false)}
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  )
}

export default Header
