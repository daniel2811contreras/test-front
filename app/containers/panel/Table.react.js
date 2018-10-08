/* import */
import React from 'react';
import Is from 'is_js';

/* class */
class TableReact extends React.Component {
  constructor() {
    super();
    this.state = {
      classcss: "",
      columns: [
        {
          label: "Id",
          field: "id",
          format: null
        }
      ],
      data: [
        {
          id: " xd "
        }
      ],
      dataNew: [],
      searchData: false,
      search: false,
      searchLabel: "search...",
      searchText: "",
      classSearch: "is-4 is-offset-8",
      iconSearchLeft: "",
      iconSearchRight: "",
      titleClass:"",
      dataOrigin: [],
      pageFormate: true,
      page: 1,
      pageInitial: 0,
      fieldPage: 3,
      fieldPageIni: 0,
      pages: [],
      dataPage: [3, 5, 10, 20, 50],
      pageClass:""
    }
  }
  static getDerivedStateFromProps(next, state) {

    var newState = state;
    var _json = state;
    if (Is.not.empty(next)) {
      if (Is.not.undefined(next.classcss)) {
        _json.classcss = next.classcss;
      }
      if (Is.not.undefined(next.columns)) {
        _json.columns = next.columns;
      }
      if (Is.not.undefined(next.data)) {
        _json.data = next.data;
      }
      if (Is.not.undefined(next.search)) {
        _json.search = next.search;
      }
      if (Is.not.undefined(next.searchLabel)) {
        _json.searchLabel = next.searchLabel;
      }
      if (Is.not.undefined(next.classSearch)) {
        _json.classSearch = next.classSearch;
      }
      if (Is.not.undefined(next.iconSearchLeft)) {
        _json.iconSearchLeft = next.iconSearchLeft;
      }
      if (Is.not.undefined(next.iconSearchRight)) {
        _json.iconSearchRight = next.iconSearchRight;
      }
      if (Is.not.undefined(next.titleClass)) {
        _json.titleClass = next.titleClass;
      }
      if (Is.not.undefined(next.pageFormate)) {
        _json.pageFormate = next.pageFormate;
      }
      if (Is.not.undefined(next.fieldPageIni)) {
        _json.fieldPageIni = next.fieldPageIni;
      }
      if (Is.not.undefined(next.pageInitial)) {
        _json.pageInitial = next.pageInitial;
      }
      if (Is.not.undefined(next.dataPage)) {
        _json.dataPage = next.dataPage;
      }
      if (Is.not.undefined(next.pageClass)) {
        _json.pageClass = next.pageClass;
      }

      newState = {
        ...state,
        _json
      }
    }
    return newState;

  }

  _columns() {
    return this.state.columns.map((data, i) => {
      return (<th key={i} field={data.field} format={data.format}>{data.label}</th>);
    });
  }

  _datas() {
    let self = this;
    if (Is.truthy(this.state.searchData)) {
      return this.state.dataNew.map((data, i) => {
        return (<tr key={i}>
          {self._data(data, i)}
        </tr>);
      });
    } else {
      return this.state.data.map((data, i) => {
        return (<tr key={i}>
          {self._data(data, i)}
        </tr>);
      });
    }

  }
  _format(e, format, cell, row) {
    let info = {
      cell: cell,
      row: row
    }
    return this.props[format](info);
  }
  _pages() {
    let _pages;
    if (Is.truthy(this.state.searchData)) {
      _pages = (this.state.dataNew.length / this.state.fieldPage);
      _pages = Math.ceil(_pages);
    } else {
      _pages = (this.state.data.length / this.state.fieldPage);
      _pages = Math.ceil(_pages);
    }
    return _pages;
  }
  _viewPegas() {
    let _view = "";
    let self = this;
    if (Is.truthy(self.state.pageFormate)) {
      let _pages = self._pages();
      let _numPages = [];
      for (var i = 1; i <= _pages; i++) {
        _numPages.push(i);
      }
      let _tam = _numPages.length;
      _view = (<div className="field has-addons ">
        <p className="control">
          <a className="button" onClick={this._goPageleft.bind(this)}>
            <span className="icon is-small">
              <i className="fas fa-angle-left"></i>
            </span>
          </a>
        </p>
        {

          _numPages.map((data, i) => {
            if (self.state.page == data) {
              return (<p className="control" key={i}>
                <a className="button is-link" onClick={this._goPage.bind(this, data)}>
                  <span>
                    {data}
                  </span>
                </a>
              </p>);
            } else if (data == (self.state.page - 1) || data == (self.state.page + 1)) {
              return (<p className="control" key={i}>
                <a className="button" onClick={this._goPage.bind(this, data)}>
                  <span>
                    {data}
                  </span>
                </a>
              </p>);
            } else {
              return "";
            }
          })
        }

        <p className="control">
          <a className="button" onClick={this._goPageright.bind(this)}>
            <span className="icon is-small">
              <i className="fas fas fa-angle-right"></i>
            </span>
          </a>
        </p>
      </div>);
    } else {
      _view = "";
    }
    return _view;
  }
  _goPage(page) {
    this.setState({page: page})
  }
  _goPageleft() {
    let page = this.state.page - 1;
    if (page <= 0) {
      page = 1;
    }
    this.setState({page: page})
  }
  _goPageright() {
    let page = this.state.page + 1;
    if (page > this._pages()) {
      page = this._pages();
    }
    this.setState({page: page})
  }
  _data(row, i) {
    let self = this;
    return this.state.columns.map((data, j) => {
      if (Is.truthy(self.state.pageFormate)) {
        if (((self.state.page - 1) * self.state.fieldPage) <= (i) && (((self.state.page - 1) * self.state.fieldPage) + self.state.fieldPage) > (i)) {
          // normal
          if (Is.not.undefined(row[data.field])) {
            if (Is.not.undefined(data.format) && Is.not.null(data.format)) {
              return (<td key={j} cell={row[data.field]} row={row}>{self._format(this, data.format, row[data.field], row)}</td>);
            } else {
              return (<td key={j} cell={row[data.field]} row={row}>{row[data.field]}</td>);
            }
          } else {
            if (Is.not.undefined(data.format) && Is.not.null(data.format)) {
              return (<td key={j} cell={null} row={row}>{self._format(this, data.format, null, row)}</td>);
            } else {
              return (<td key={j} cell="" row={row}>
                &nbsp;
              </td>);
            }

          }
        }

      } else {
        // normal
        if (Is.not.undefined(row[data.field])) {
          if (Is.not.undefined(data.format) && Is.not.null(data.format)) {
            return (<td key={j} cell={row[data.field]} row={row}>{self._format(this, data.format, row[data.field], row)}</td>);
          } else {
            return (<td key={j} cell={row[data.field]} row={row}>{row[data.field]}</td>);
          }
        } else {
          return (<td key={j} cell="" row={row}>
            &nbsp;
          </td>);
        }
      }

    });
  }
  _searchChange(e) {
    let self = this;
    let value = e.target.value;
    this.setState({searchText: value});
    setTimeout(() => {

      if (this.state.searchText != "") {
        let _dataOrigin = this.state.data;
        let _dataNew = [];
        let k;
        this.setState({dataOrigin: _dataOrigin});
        this.state.data.map((data, i) => {
          let _data = data;
          k = 0;
          self.state.columns.map((dato, j) => {
            if (Is.not.undefined(_data[dato.field])) {
              if (_data[dato.field].indexOf(self.state.searchText) > -1) {
                // console.log(k,j);
                if (k <= 0) {
                  _dataNew.push(_data);
                  k = j;
                }
              }
            }
          });
        });
        this.setState({dataNew: _dataNew, searchData: true});
        this._goPage(1);
      } else {
        let _dataOrigin = this.state.dataOrigin;
        this.setState({data: _dataOrigin, searchData: false, dataNew: []});
      }
    }, 100);
  }
  _search() {
    let __search = "";
    if (Is.truthy(this.state.search)) {
      __search = (<div className="columns">
        <div className={"column " + this.state.classSearch}>
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder={this.state.searchLabel} value={this.state.searchText} onChange={this._searchChange.bind(this)}/>
              <span className="icon is-small is-left">
                <i className={this.state.iconSearchLeft}></i>
              </span>
              <span className="icon is-small is-right">
                <i className={this.state.iconSearchRight}></i>
              </span>
            </div>
          </div>
        </div>
      </div>);
    }

    return __search;
  }
  componentDidMount() {
    if (this.state.pageInitial != 0 && this.state.pageInitial <= this._pages()) {
      let page = this.state.pageInitial;
      if (page < 0) {
        page = 1;
      }
      this._goPage(page);
    }
    if (this.state.fieldPageIni != 0) {
      let fieldPageIni = this.state.fieldPageIni;
      this.setState({fieldPage: fieldPageIni});
    }
  }
  _pageType() {
    let _view = "";
    let self = this;
    if (Is.truthy(self.state.pageFormate)) {
      let _pages = self._pages();
      let _numPages = this.state.dataPage;
      _view = (<div className="select align-right">
        <select value={this.state.fieldPage} onChange={this._fieldPage.bind(this)}>
          {
            _numPages.map((data, i) => {
              if (data <= self._ofField() || i == 0) {
                return (<option key={i} value={data}>{data}</option>);
              }
            })
          }
        </select>
      </div>)
    } else {
      _view = "";
    }
    return _view;
  }
  _fieldPage(e) {
    let value = e.target.value;
    this.setState({fieldPage: parseInt(value)});
    this._goPage(1);
  }
  _rangField() {
    let _valField = ((this.state.page - 1) * this.state.fieldPage + this.state.fieldPage)
    if (Is.truthy(this.state.searchData)) {
      if (_valField > this.state.dataNew.length) {
        _valField = this.state.dataNew.length
      }
    } else {
      if (_valField > this.state.data.length) {
        _valField = this.state.data.length
      }
    }
    return _valField;
  }
  _ofField() {
    let _valField = "";
    if (Is.truthy(this.state.searchData)) {
      _valField = this.state.dataNew.length
    } else {
      _valField = this.state.data.length
    }
    return _valField;
  }
  render() {
    return (<div className="__table_react_bulma">
      {this._search()}
      <table className={"table " + this.state.classcss}>
        <thead className={this.state.titleClass}>
          <tr>
            {this._columns()}
          </tr>
        </thead>
        <tbody>
          {this._datas()}
        </tbody>
      </table>
      <div className={"columns "+this.state.pageClass}>
        <div className="column is-12">
          <label>rows from {((this.state.page - 1) * this.state.fieldPage)+1}&nbsp;to&nbsp;{this._rangField()}&nbsp;of&nbsp;{this._ofField()}</label>
          {this._pageType()}
        </div>
      </div>
      <div className="columns">
        <div className="column is-6">
          {this._viewPegas()}
        </div>
      </div>
    </div>);
  }
}

/* export default */
export default TableReact;
