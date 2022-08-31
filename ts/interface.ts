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
	id_task?: number
	judul: string
	komentar: string
	jam: string
	tanggal: string
	keterangan?: string
}

export type {
	IAddModal,
	ILogoutModal,
	IDeleteModal,
	ILayout,
	Todo,
	IGetMeResponse
}
