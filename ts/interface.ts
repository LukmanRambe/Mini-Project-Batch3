import React, { SetStateAction } from 'react'

interface IAddModal {
	todos: Todo[]
	setTodos: React.Dispatch<SetStateAction<Todo[]>>
	isOpen: boolean
	onClose: () => void
}

interface ILogoutModal {
	isLogoutModalOpen: boolean
	setIsLogoutModalOpen: React.Dispatch<SetStateAction<boolean>>
	onLogoutModalClose: () => void
}

interface IDeleteModal {
	isDeleteModalOpen: boolean
	setIsDeleteModalOpen: React.Dispatch<SetStateAction<boolean>>
	onDeleteModalClose: () => void
}

interface ILayout {
	title: string
	children: React.ReactChild
}

interface Todo {
	id: number
	judul_task: string
	komentar_task: string
	jam_task: string
	tanggal_task: string
	status_task: string
	overdue: boolean
}

interface FormatDate {
	weekday: string
	year: string
	month: string
	day: string
}

export type { IAddModal, ILogoutModal, IDeleteModal, ILayout, Todo, FormatDate }
