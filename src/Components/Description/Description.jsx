import React from 'react'
import "./Description.scss"

const data = [
    {
        title: "Steering:",
        value: "Left"
    },
    {
        title: "Model Number:",
        value: "SOL E20X"
    },
    {
        title: "Battery Type:",
        value: "Lead Acid"
    },
    {
        title: "Battery Energy(kWh):",
        value: "50-70kWh"
    },
    {
        title: "Fast Charge Time(h):",
        value: "1-3h"
    },
    {
        title: "Total Motor Power(kw):",
        value: "100-150kW"
    },
    {
        title: "Total Horsepower(Ps):",
        value: "150-200Ps"
    },
    {
        title: "Dimension:",
        value: "4135x1750x1565"
    },
    {
        title: "Front Suspension:",
        value: "Macpherson"
    },
    {
        title: "Steering System:",
        value: "Electric"
    },
    {
        title: "Brake System:",
        value: "Front disc+Rear dsic"
    },
    {
        title: "Airbags:",
        value: "2"
    },
    {
        title: "Headlight:",
        value: "LED"
    },
]
const Description = () => {
    return (
        <div>
            <div className="title">
                <h4>Overview</h4>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <table>
                        {data.map((e) => {
                            return (
                                <tr>
                                    <td>{e?.title}</td>
                                    <td>{e?.value}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div className="col-md-4">
                    <table>
                        {data.map((e) => {
                            return (
                                <tr>
                                    <td>{e?.title}</td>
                                    <td>{e?.value}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div className="col-md-4">
                    <table>
                        {data.map((e) => {
                            return (
                                <tr>
                                    <td>{e?.title}</td>
                                    <td>{e?.value}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <div className="title">
                <h4>Supply Ability</h4>
            </div>
            <table>
                <tr>
                    <td>Supply Ability:</td>
                    <td>500 Set/Sets per Quarter</td>
                </tr>
            </table>
            <div className="title">
                <h4>Packaging & Delivery</h4>
            </div>
            <table>
                <tr>
                    <td>Packaging Details:</td>
                    <td>SOL E20X for sale by container and ro-ro shipment</td>
                </tr>
                <tr>
                    <td>Port:</td>
                    <td>Jawaharlal Nehru Port / Kamarajar Port / Deendayal Port / Kochi port</td>
                </tr>
                <tr>
                    <td>Lead Time:</td>
                    <td>Quantity(Sets) 1-1 > 1</td>
                </tr>
            </table>
        </div>
    )
}

export default Description