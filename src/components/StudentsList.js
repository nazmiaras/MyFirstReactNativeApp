import _ from 'lodash';
import React,{Component} from 'react';
import {View,Text,ListView} from 'react-native';
import {connect} from 'react-redux';
import {studentListData} from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component{
    componentWillMount(){
        this.props.studentListData();
        this.createDataSource(this.props);        
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }
    createDataSource({studentsArray}){
        const ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(studentsArray);
    }
    renderRow(ogrenci){
        return <ListItem ogrenci={ogrenci} />;
    }

    render(){
        return(
            <View>
                <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = ({studentsDataResponse}) =>{
    const studentsArray = _.map(studentsDataResponse,(val,uid) => {
        return {...val,uid}; // {isim:'Ayse',soyisim:'asda',sube:'asube',uid:'kq9a9sd9asda'}
    });
    return {studentsArray};
};

export default connect(mapStateToProps, { studentListData })(StudentsList);