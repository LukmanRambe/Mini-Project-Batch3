import { Container, Button } from '@chakra-ui/react'
import { useState } from 'react'
import AddModal from './Modal/AddModal'

const Todos = () => {
	const [visibleAddModal, setVisibleAddModal] = useState(false)
	return (
		<Container>
			<Button onClick={() => setVisibleAddModal(true)}>Tambah</Button>
			<div>Todos</div>

			{/* add Todos */}
			<AddModal
				isOpen={visibleAddModal}
				onClose={() => setVisibleAddModal(prev => !prev)}
			/>
		</Container>
	)
}

export default Todos
