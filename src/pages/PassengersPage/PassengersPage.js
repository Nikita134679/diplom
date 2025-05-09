import React from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../components/Layout/Layout';
import MainSearchBlock from '../../components/MainSearchBlock/MainSearchBlock';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SidebarDetails from '../../components/SidebarDetails/SidebarDetails';
import PassengersSelection from '../../components/PassengersSelection/PassengersSelection';
import Redirect from '../../components/Redirect/Redirect';

import { selectSelectedSeats } from '../../store/slices/seatsSlice';
import { selectIndex } from '../../store/slices/trainSlice';

import widthOptions from '../../components/MainSearchBlock/widthOptions';
import picsOptions from '../../components/Layout/picsOptions';
import directions from '../../data/directions';

import styles from './PassengersPage.module.scss';

function PassengersPage() {
   const seatsDep = useSelector(selectSelectedSeats)[directions.departure];
   const seatsArr = useSelector(selectSelectedSeats)[directions.arrival];
   const selectedTrainIndex = useSelector(selectIndex);

   let midBody;
   if (
      (seatsDep.length > 0 || seatsArr.length > 0) &&
      selectedTrainIndex !== null
   ) {
      midBody = (
         <>
            <div>
               <SidebarDetails />
            </div>
            <div className={styles['wrapper-main']}>
               <PassengersSelection />
            </div>
         </>
      );
   } else {
      midBody = <Redirect />;
   }
   const body = (
      <>
         <ProgressBar step={2} />
         <div className={styles.body}>{midBody}</div>
      </>
   );
   return (
      <Layout pic={picsOptions.search} body={body}>
         <MainSearchBlock width={widthOptions.wide} />
      </Layout>
   );
}

export default PassengersPage;