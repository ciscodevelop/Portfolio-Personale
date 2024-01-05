import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import './Timeline.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '..';

export default function CustomizedTimeline() {
    const {t}=useTranslation()
    console.log( t('timeline[0].title') );
    
  return (
    <Timeline position='alternate' className='container_timeline'>
        <h1>Time Line Works</h1>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' >
          {t('timeline.last.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
          <LaptopMacIcon  sx={{color:'green'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span' >
            {t('timeline.last.title')}
          </Typography>
          <Typography>
            {t('timeline.last.desc')}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='#D4F552'>
         {t('timeline.fifth.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
          {t('timeline.fifth.title')}
          </Typography>
          <Typography>   {t('timeline.fifth.desc')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='#D4F552'>
         {t('timeline.fourth.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
          {t('timeline.fourth.title')}
          </Typography>
          <Typography>   {t('timeline.fourth.desc')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='#D4F552'>
         {t('timeline.third.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
          {t('timeline.third.title')}
          </Typography>
          <Typography>   {t('timeline.third.desc')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='#D4F552'>
         {t('timeline.second.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
          {t('timeline.second.title')}
          </Typography>
          <Typography>   {t('timeline.second.desc')}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='body2' color='#D4F552'>
         {t('timeline.first.date')}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary'>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
          {t('timeline.first.title')}
          </Typography>
          <Typography>   {t('timeline.first.desc')}</Typography>
        </TimelineContent>
      </TimelineItem>
        <Button text='Download CV' classList={['btn_cv green']}style={{width:'200px'}}/>
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='primary' variant='outlined'>
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color='secondary'>
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
