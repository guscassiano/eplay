import { useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl } from '../../utils'
import { add, open } from '../../store/reducers/cart'

import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.discount && (
                <span>De {parseToBrl(game.prices.old)}</span>
              )}
              {game.prices.current && (
                <>Por {parseToBrl(game.prices.current)}</>
              )}
            </p>
            {game.prices.current && (
              <Button
                type="button"
                title="Click no botão para adicionaro game ao carrinho"
                variant="primary"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}

export default Hero
