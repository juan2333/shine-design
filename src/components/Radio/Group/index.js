/**
 * @Component Radio.Group
 * @Type 单选组组件
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2020-03-29 15:33
 */
import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import OptionsGroup from '../../Option/OptionsGroup';

class RadioGroup extends PureComponent {

  render() {
    return <OptionsGroup {...this.props} type="radio" />
  }
}

RadioGroup.propTypes = {
  /** 定位表单元素 */
  isFormElement: PropTypes.bool,
};

RadioGroup.defaultProps = {
  isFormElement: true,
};

export default RadioGroup;
