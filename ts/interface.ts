interface IAddModal {
    isOpen: boolean,
    onClose: () => void,
}

interface ILayout {
    title: string,
    children: React.ReactChild
}

export type {
    IAddModal,
    ILayout
}
