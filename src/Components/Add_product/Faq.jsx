import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const data2 = [
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    },
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    },
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    },
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    },
    {
        qus: "Lorem ipsum dolor sit amet the consectetur it incididunt? ",
        ans: "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod Lorem ipsum dolor sit amet, adipiscing eiusmod tempor incididunt laibore tempor laibore dummy aliqua. consectetur adipiscing eiusmod tempor incididunt ipsum dolor amet, consectetur adipiscing eiusmod lorem ipsum."
    }
]
const Faq = ({handleChange,data}) => {
    return (
        <div className='product_faq faqs'>
            <Container>
                <h5>FAQs</h5>
                <Grid container spacing={3}>
                    <Grid item sx={12} sm={12} md={6} className="position-relative">
                        <div className="input_filed">
                            <label htmlFor="Question">Question</label>
                            <TextField
                                type="text"
                                hiddenLabel
                                id="outlined-basic"
                                variant="outlined"
                                name="question"
                                onChange={handleChange}
                                value={data?.question}
                            />
                        </div>
                        <div className="input_filed mt-3">
                            <label htmlFor="Answer">Answer</label>
                            <TextareaAutosize
                                type="text"
                                hiddenLabel
                                id="outlined-basic"
                                variant="outlined"
                                name="ans"
                                onChange={handleChange}
                                value={data?.ans}
                                maxRows={6}
                                minRows={4}
                            />
                        </div>
                        <button className='outline_btn'>Submit</button>
                    </Grid>
                    <Grid item sx={12} sm={12} md={6} className="mar_top_20">
                        {data2?.map((e) => {
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
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default Faq