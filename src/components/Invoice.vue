<template>
  <div class="invoice-page">
    <div class="invoice-page-header">
      <div class="left-tip-wrapper">
        <img src="../assets/invoice-updf-logo.png" alt="" />
      </div>
      <div class="right-tip-wrapper">
        <h2 class="right-tip-title">Invoice</h2>
        <p class="right-tip-msg msg1">Invoice#: {{ invoiceGnForm.tax }}</p>
        <p class="right-tip-msg">Invoice date:{{ formatDate(new Date()) }}</p>
        <p class="right-tip-msg">Due date:{{ invoiceGnForm.invoiceDate }}</p>
      </div>
    </div>

    <div class="invoive-page-body">
      <div class="core-top-from">
        <div class="core-top-from-left">
          <p class="from">From:</p>
          <p class="from-msg" style="white-space: pre-wrap">{{ invoiceGnForm.from }}</p>
        </div>
        <div class="core-top-from-right">
          <p class="money-tip">Amount due</p>
          <p class="money">{{ invoiceGnForm.currency }}{{ invoiceGnForm.total }}</p>
        </div>
      </div>

      <div class="core-middle-to">
        <p class="from">Bill to:</p>
        <p class="from-msg" style="white-space: pre-wrap">{{ invoiceGnForm.billTo }}</p>
      </div>

      <div class="core-table">
        <div class="line1 core-table-line">
          <p class="cell_p cell_p1">Description</p>
          <p class="cell_p">Quantity</p>
          <p class="cell_p">Price</p>
          <p class="cell_p">Amount</p>
        </div>
        <div class="line2 core-table-line">
          <p class="cell_p cell_p1">
            {{ invoiceGnForm.product1 }} <span v-if="invoiceGnForm.product2"> + {{ invoiceGnForm.product2 }}</span>
          </p>
          <p class="cell_p">{{ invoiceGnForm.quantity }}</p>
          <p class="cell_p">{{ invoiceGnForm.currency }}{{ invoiceGnForm.unitPrice }}</p>
          <p class="cell_p">{{ invoiceGnForm.currency }}{{ invoiceGnForm.total }}</p>
        </div>
        <!-- <div class="line3 core-table-line">
          <p class="cell_p cell_p1">UPDF AI - Annual Plan</p>
          <p class="cell_p">1</p>
          <p class="cell_p">$43.99</p>
          <p class="cell_p">$43.99</p>
        </div> -->
        <div class="line4 core-table-line">
          <p class="cell_p cell_p1 cell_no_display">Description</p>
          <p class="cell_p" style="border-left: 1px solid var(--DADADA, #dadada)"></p>
          <p class="cell_p">Subtotal</p>
          <p class="cell_p">{{ invoiceGnForm.currency }}{{ invoiceGnForm.total }}</p>
        </div>
      </div>
      <div class="line5 core-table-line">
        <p class="cell_p cell_p1 cell_no_display">Description</p>
        <p class="cell_p"></p>
        <p class="cell_p">Total</p>
        <p class="cell_p">{{ invoiceGnForm.currency }}{{ invoiceGnForm.total }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

function formatDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从 0 开始，需要加 1
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const props = defineProps({
  invoiceGnForm: {
    type: Object,
  },
})
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'inter';
  src: url(./Inter-Regular.ttf);
}
@font-face {
  font-family: 'inter';
  font-weight: 700;
  src: url(./Inter-Bold.ttf) format('truetype');
}
.invoice-page {
  font-family: 'inter';
  margin: 0 auto;
  width: 595px;
  height: 842px;
  background: #f7f7f7;
  // transform: scale(1.37) translateY(110px);
  box-sizing: border-box;
}
.invoice-page-header {
  box-sizing: border-box;
  display: flex;
  padding: 40px 40px 30px 40px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}
.left-tip-wrapper {
  width: 94px;
}
img {
  width: 100%;
}

.invoive-page-body {
  max-width: 563px;
  width: 95%;
  height: 658px;
  background: #ffffff;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 24px;
}

.from {
  color: var(--242424, #242424);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: -2px;
}

.from-msg {
  color: var(--303030, #303030);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 4px;
  word-wrap: break-word;
}
.core-top-from {
  display: flex;
  justify-content: space-between;
}
.core-top-from-left {
  max-width: 285px;
  text-align: left;
}

.core-top-from-right {
  padding: 10px 40px;
  border-radius: 4px;
  border: 1px solid var(--DADADA, #dadada);
  text-align: center;
  // height: 40px;
}
.money-tip {
  color: var(--303030, #303030);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}

.money {
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.core-middle-to {
  margin-top: 40px;
  max-width: 475px;
  text-align: left;
}

.core-table {
  margin-top: 40px;
  border-radius: 2px 2px 0px 0px;

  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.core-table-line {
  display: flex;
  height: 36px;

  align-items: center;
}
.line1 {
  background-color: #f7f7f7;
  border-top: 1px solid var(--DADADA, #dadada);
  border-left: 1px solid var(--DADADA, #dadada);
  border-right: 1px solid var(--DADADA, #dadada);
  border-radius: 2px 2px 0 0;
  font-weight: 700;
}

.line2 {
  background-color: #ffffff;
  border-top: 1px solid var(--DADADA, #dadada);
  border-left: 1px solid var(--DADADA, #dadada);
  border-right: 1px solid var(--DADADA, #dadada);
}
.line3 {
  background-color: #ffffff;
  border-top: 1px solid var(--DADADA, #dadada);
  border-left: 1px solid var(--DADADA, #dadada);
  border-right: 1px solid var(--DADADA, #dadada);
}
.line4 {
  background-color: #ffffff;
  border-top: 1px solid var(--DADADA, #dadada);
  display: flex;
  justify-content: flex-end;
}

.line5 {
  display: flex;
  justify-content: flex-end;
  font-weight: 700;
  .cell_p {
    background-color: #f7f7f7;
  }
  .cell_no_display {
    background: #ffffff;
  }
}

.line4 .cell_p {
  display: flex;
  align-items: center;
  height: 100%;
  text-align: right;
  justify-content: flex-end;
  border-bottom: 1px solid var(--DADADA, #dadada);
}
.line4 .cell_p:last-child {
  border-right: 1px solid var(--DADADA, #dadada);
}

.line5 .cell_p:last-child {
  border-right: 1px solid var(--DADADA, #dadada);
}

.line5 .cell_p {
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 100%;
  text-align: right;
  justify-content: flex-end;
  border-bottom: 1px solid var(--DADADA, #dadada);
}
.line4 .cell_p:nth-child(2) {
  justify-content: center;
}
.line5 .cell_p:nth-child(2) {
  justify-content: center;
  border-left: 1px solid var(--DADADA, #dadada);
}

.cell_p:nth-child(2) {
  text-align: center;
}

.cell_no_display {
  display: none !important;
}

.right-tip-title {
  color: var(--242424, #242424);
  text-align: right;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.right-tip-msg {
  color: var(--242424, #242424);
  text-align: right;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.msg1 {
  margin-top: 16px;
}
.cell_p {
  width: 16.2%;

  text-align: right;
}
.cell_p1 {
  text-align: left;
  width: 47%;
  padding-left: 12px;
}

.cell_p:nth-of-type(4) {
  padding-right: 12px;
}
</style>
