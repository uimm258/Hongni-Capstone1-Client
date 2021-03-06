import React, {Component} from 'react'
import Script from '../Script/Script'
import Context from '../Context'
import {findScript} from '../scripts-helpers'
import './ScriptPageMain.css'
//import TokenService from '../services/token-service'
//import { Link } from 'react-router-dom'

export default class ScriptPageMain extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = Context

    handleDeleteScript = scriptId => {
        this.props.history.push(`/`)
    }

    render(){
        const {scripts=[]} = this.context
        const {scriptId} = this.props.match.params
        const script = findScript(scripts, parseInt(scriptId)) || {content: ''}

        return (
            <section className="ScriptPageMain">

                <Script
                    id={script.id}
                    name={script.scripts_name}
                    people={script.people}
                    time_spend={script.time_spend}
                    type={script.scripts_type}
                    price={script.scripts_price}
                    onDeleteScript={this.handleDeleteScript}
                />
    
                <div className="ScriptPageMain_image">
                    <img src={`${script.scripts_image}`} onError={i => i.target.style.display='none'} alt="暂无图片" />
                </div>
                <div className="ScriptPageMain_content">
                    {script.content.split(/\\n \\r|\\n/).map((para, i) =><p key={i}>{para}</p>
                    )}
                </div>


            </section>
        )
    }

    
}

