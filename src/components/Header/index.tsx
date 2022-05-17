import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HaederProps {
    onOpenNewTransactionModal: () => void; 
}

export function Header ({ onOpenNewTransactionModal }: HaederProps){
    
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>

           
            </Content>
        </Container>
    )
}