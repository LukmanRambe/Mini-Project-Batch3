import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import Layout from "../../components/home/Layout";
import Todos from "../../components/home/Todos";
import CalendarClock from "../../components/home/Layout/Calendar";

const Overdue = () => {
  return (
    <Layout title="Mini Project Vocasia - Overdue">
      <Grid templateColumns="repeat(12, 1fr)" gap={4}>
        <GridItem colSpan={9}>
          <Todos Header="Overdue" />
        </GridItem>
        <GridItem colSpan={3}>
          <CalendarClock />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Overdue;
