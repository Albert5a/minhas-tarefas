import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <S.Campo type="text" placeholder="Buscar" />
    <S.Filtros>
      <FiltroCard contador={12} legenda="pendentes" />
      <FiltroCard contador={2} legenda="concluídas" />
      <FiltroCard contador={3} legenda="urgentes" />
      <FiltroCard contador={4} legenda="importantes" />
      <FiltroCard contador={5} legenda="normal" />
      <FiltroCard contador={14} legenda="todas" ativo />
    </S.Filtros>
  </S.Aside>
)

export default BarraLateral
