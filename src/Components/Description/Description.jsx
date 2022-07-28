import React from 'react'
import "./Description.scss"
import parse from 'html-react-parser'

const Description = ({data}) => {
    return (
        <div>
            <div className="title">
                <h4>Overview</h4>
            </div>
            <div className="row">
            {data?.description && parse(data?.description.replace(/!important/g, ''))}
            </div>
            <div className="title">
                <h4>Supply Ability</h4>
            </div>
            <table>
                <tr>
                    <td>Supply Ability:</td>
                    <td>{data?.supplyAbility}</td>
                </tr>
            </table>
            <div className="title">
                <h4>Packaging & Delivery</h4>
            </div>
            <table>
                <tr>
                    <td>Packaging Details:</td>
                    <td>{data?.packaging}</td>
                </tr>
                <tr>
                    <td>Port:</td>
                    <td>{data?.port}</td>
                </tr>
                <tr>
                    <td>Lead Time:</td>
                    <td>{data?.leadTime}</td>
                </tr>
            </table>
        </div>
    )
}

export default Description