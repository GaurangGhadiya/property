import React from 'react'
import "./Accrodions.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    },
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    }
]

const Accrodions = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    {data?.map((e) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <img src={process.env.PUBLIC_URL + "/assest/Images/qus.svg"} alt="" />
                                    <Typography className='ms-3'>{e?.qus}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='ans'>
                                        {e?.ans}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
                <div className="col-md-6">
                    {data?.map((e) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <img src={process.env.PUBLIC_URL + "/assest/Images/qus.svg"} alt="" />
                                    <Typography className='ms-3'>{e?.qus}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='ans'>
                                        {e?.ans}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Accrodions