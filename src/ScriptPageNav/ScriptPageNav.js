import React, {Component} from 'react'
import CircleButton from '../CircleButton/CircleButton'
import './ScriptPageNav.css'
import Context from '../Context'
import { findCategory, findScript } from '../scripts-helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ScriptPageNav extends Component{
    static defaultProps = { 
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    static contextType = Context

    render() {
        const { scripts, category } = this.context
        const { scriptId } = this.props.match.params
        const script = findScript(scripts, scriptId) || {}
        const category1 = findCategory(category, script.category_id)
        return (
            <div className='ScriptPageNav'>
                <CircleButton
                    tag='button'
                    role='link'
                    onClick = {() => this.props.history.goBack()}
                    className='ScriptPageNav_back-button' >
                    <FontAwesomeIcon icon='chevron-left' />
                    <br />
                    Back
                </CircleButton> 
    
                {category1 && (
                    <h3 className='ScriptPageNav_category-name'>{category1.category_name}</h3>
                )}   
                
            </div>
        )

    }
}
