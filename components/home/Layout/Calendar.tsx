// Styles
import { Grid, GridItem } from '@chakra-ui/react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';
import { useEffect, useState } from 'react';
import AnalogueClock from 'react-analogue-clock';
import {Text} from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'

const CalendarClock = () => {
	const [value, setValue] = useState(new Date());
	const time = new Date();
	const timerun = time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute:'numeric' });
	  useEffect(() => {
		const interval = setInterval(() => setValue(new Date()), 1000);
	
		return () => {
		  clearInterval(interval);
		};
	  }, []);
	  const clockOptions = {
		baseColor: '#22345E',
		borderColor: '#15264F',
		borderWidth: 5,
		centerColor: '#22345E',
		handColors: {
			hour: '#FFFFFF',
			minute: '#FFFFFF',
			second: '#DA2E7C',
		},
		notchColor: '#737373',
		numbersColor: '#000000',
		showNumbers: false,
		size: 150
	}
	return (
		<Container>
			<Grid templateColumns='repeat(4, 1fr)' gap={4}>
				<GridItem colSpan={2}>
					<AnalogueClock {...clockOptions} />
				</GridItem>
				<GridItem colSpan={2}>
					<Text fontSize='4xl'>{timerun}</Text>
				</GridItem>
			</Grid>
			<Grid>
				<Calendar value={value} />
			</Grid>
		</Container>
	)
}

export default CalendarClock
