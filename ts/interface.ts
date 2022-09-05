import React, { SetStateAction } from 'react'

interface ICurentUser {
	email: string
	password: string
}

interface IGetMeResponse {
	error: number
	status: number
	messages: ICurentUser
}

interface IAddModal {
	isOpen: boolean
	onClose: () => void
}

interface IEditModal {
	id_task?: number
	todo: Todo[]
	isEditModalOpen: boolean
	setIsEditModalOpen: React.Dispatch<SetStateAction<boolean>>
	onEditModalClose: () => void
}

interface ILogoutModal {
	isLogoutModalOpen: boolean
	setIsLogoutModalOpen: React.Dispatch<SetStateAction<boolean>>
	onLogoutModalClose: () => void
}

interface IDeleteModal {
	id_task?: number
	isDeleteModalOpen: boolean
	setIsDeleteModalOpen: React.Dispatch<SetStateAction<boolean>>
	onDeleteModalClose: () => void
}

interface ILayout {
	title: string
	children: React.ReactChild
}

interface Todo {
	id_task?: any
	judul: string
	komentar: string
	jam: string
	tanggal: string
	keterangan?: string
}

interface FormatDate {
	weekday: string
	year: string
	month: string
	day: string
}

interface IZustand {
	isAuth: boolean
	login: () => void
	logout: () => void
}

export type {
	IAddModal,
	ILogoutModal,
	IDeleteModal,
	ILayout,
	Todo,
	FormatDate,
	IGetMeResponse,
	IEditModal,
	IZustand
}
