import copy from 'copy-to-clipboard';

const oneKeyCopy = (text) => {
    copy(text); //'我是要复制的内容'
    alert('成功复制到剪贴板');
};