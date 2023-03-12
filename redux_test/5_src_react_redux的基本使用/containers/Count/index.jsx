// 引入CountUI组件
import CountUI from '../../components/Count'
// 引入用于连接UI组件和redux的connect
import {connect} from 'react-redux'
// 引入action操作状态的方法
import {createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction} from '../../redux/count_action'

// 返回值作为状态传递给UI组件
function mapStateToProps(state){
    return { count:state}
}

// 返回值作为操作状态的方法传递给UI组件
function mapDispatchToProps(dispatch){
    return {
        jia:(num)=>{dispatch(createIncrementAction(num))},
        jian:(num)=>{dispatch(createDecrementAction(num))},
        jiaAsync:(num,time)=>{dispatch(createIncrementAsyncAction(num,time))}


    }
}






export default connect(mapStateToProps,mapDispatchToProps)(CountUI)