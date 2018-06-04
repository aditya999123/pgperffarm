import React from 'react';
// import './index.css';
import ResultFilter from 'component/result-filter/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import RateBar from 'util/rate-bar/index.jsx';
import TableList    from 'util/table-list/index.jsx';
import BasicTable    from 'util/basic-table/index.jsx';
class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            currentPage: 3,
            std: 150000,
            curMark1: 243732,
            curMark2: 143733,
            curMark3: 43732,
            curMark4: 3732,
            curMark5: 32,
            isLoading: false,
            list: [
                {
                    'alias': 'a_name',
                    'email': 'a_name@mail.com',
                    'clients': [2,3,4],
                    'mark': [140000,1,1],
                }, {
                    'alias': 'b_name',
                    'email': 'b_name@mail.com',
                    'clients': '4',
                    'mark': 150000
                }
            ]

        }
        this.onPageChange = this.onPageChange.bind(this);
        this.handleIsLoading = this.handleIsLoading.bind(this);
    }

    onPageChange(page) {
        console.log(page);
        console.log(this);
        this.setState({
            current: page,
        });
    }

    handleIsLoading(isLoading) {
        this.setState({
            isLoading: isLoading
        })
    }

    render() {
        let show = this.state.isLoading ? "none" : "block";
        let style = {
            display: show
        };

        let listBody = this.state.list.map((machine, index) => {
            return (
                <tr key={index}>

                    <td>{machine.alias}</td>
                    <td><a href={'mailto:' + machine.email}>{machine.email}</a></td>
                    <td>
                        {machine.clients}
                        {/*<th rowspan="3"></th>*/}
                        {/*<th rowspan="3">1-2</th>*/}
                        {/*<th rowspan="2">1-3</th>*/}
                        {/*<th rowspan="1">1-4</th>*/}
                        {/*<th rowspan="3">1-5</th>*/}
                    </td>

                    <td>
                        <div>
                            <p>..</p>
                            <RateBar style={{float: 'right', zIndex: 999}} std={this.state.std} curMark={this.state.curMark2}/>
                        </div>
                        {/*<div style={{float: 'left'}}> <p>{machine.mark}</p></div>*/}
                    </td>
                    <td>{new Date().toDateString()}</td>
                </tr>
            );
        });

        return (
            <div id="page-wrapper">
                <h1>status page</h1>
                <p>
                    Shown here is the latest status of each farm member for each branch it has reported on in the last
                    30 days.
                    Use the farm member link for history of that member on the relevant branch.
                </p>


                <ResultFilter isLoading={this.state.isLoading} onIsLoadingChange={this.handleIsLoading}/>

                <TableList tableHeads={['alias', 'email', 'clients', 'mark', 'date']}>
                    {listBody}
                </TableList>
                {/*<BasicTable></BasicTable>*/}
                <Pagination style={style} onChange={this.onPageChange} current={this.state.currentPage} total={25}/>
                <RateBar std={this.state.std} curMark={this.state.curMark1}/>

            </div>
        )
    }
}

export default Status;