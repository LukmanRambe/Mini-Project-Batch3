import create from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { IZustand } from '../ts/interface'

export const useStore = create<IZustand>()(
	devtools(
		persist(set => ({
			// initial state
			isAuth: false,
			// methods for manipulating state
			login: () => {
				set(() => ({
					isAuth: true
				}))
			},
			logout: () => {
				set(() => ({
					isAuth: false
				}))
			}
		}))
	)
)
