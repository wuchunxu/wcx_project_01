"use strict";
/*
    * 准备正则表达式，如果要验证汉字（\u4e00-\u9fa5汉字）
    * */
export const regUname = /^[0-9a-zA-Z_]{6,18}$/; //6~18位数字、字母、下划线
export const regUpwd = /^[0-9a-zA-Z_@\.]{6,18}$/;
export const regEmail = /^[0-9a-zA-Z]{3,12}@[0-9a-zA-Z]{2,12}(.(com|cn|org))+$/;
export const regPhone = /^(\+86|0086)?\s*1[3-9]\d{9}$/;

//正则表达式验证方法
export function regCheck(reg, input) {
    var result = reg.test(input.val());
    if (result) {
        input
            .siblings("span.feedback.success")
            .addClass("in");
    } else {
        input
            .siblings("span.feedback.failed")
            .addClass("in");
    }
    input.attr("data-isReady", result);
    return result;
}