<template>
  <div>
    <div class="invoce-dialog-wrapper">
      <el-form ref="addInvoiceForm" :rules="rules" v-loading="updateLoading" :model="invoiceGnForm" style="margin-top: 24px">
        <div class="core-form-wrapper">
          <h3 class="invoice-form-title">'Bill To:'</h3>

          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item class="first-form-item" label="Invoice" prop="Tax">
                <el-input clearable maxlength="50" v-model="invoiceGnForm.tax" placeholder="Name" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Due Date" prop="invoiceDate">
                <el-input clearable v-model="invoiceGnForm.invoiceDate" />
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Price1" prop="Price1">
          
                <el-input clearable maxlength="50" v-model="invoiceGnForm.total" placeholder="price1" />
              </el-form-item>
            </el-col>
          </el-row> -->

          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="BillTo" prop="BillTo">
                <el-input clearable type="textarea" :rows="5" v-model="invoiceGnForm.billTo" placeholder="billTo" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Product" prop="product">
                <el-input clearable v-model="invoiceGnForm.product1" placeholder="product1" />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="Quantity" prop="Quantity">
                <el-input clearable v-model="invoiceGnForm.quantity" placeholder="Quantity" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="total" prop="total">
                <el-input style="width: 23%; margin-right: 2%" clearable v-model="invoiceGnForm.currency" placeholder="Currency" />
                <el-input style="width: 75%;" clearable v-model="invoiceGnForm.total" placeholder="total" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <el-form-item label="From" prop="from">
                <el-input clearable type="textarea" :rows="5" v-model="invoiceGnForm.from" placeholder="From" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>

    <!-- <div class="invoice-dailog-footer">
      <el-button size="large" class="submit" @click="enterDailog" type="primary"> 'Submit' </el-button>
      <el-button size="large" class="cancel" @click="closeDialog">'Cancel'</el-button>
    </div> -->
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, watch } from 'vue'
import { cloneDeep } from 'lodash'
const props = defineProps({
  invoiceGnForm: {
    type: Object,
  },
})

const invoiceGnForm = ref(cloneDeep(props.invoiceGnForm))
const emits = defineEmits(['updateInvoiceGnForm'])
const updateInvoiceGnForm = () => {
  if (invoiceGnForm.value.total && invoiceGnForm.value.quantity) {
    let unitPrice = (Number(invoiceGnForm.value.total) / Number(invoiceGnForm.value.quantity)).toFixed(2)
    // 去除后面的0,如果最后一位是.则去掉.
    unitPrice = unitPrice.replace(/0{1,}$/g, '').replace(/\.$/, '')
    invoiceGnForm.value.unitPrice = unitPrice
  }
  emits('updateInvoiceGnForm', invoiceGnForm.value)
}

watch(invoiceGnForm.value, (newVal) => {
  updateInvoiceGnForm()
}, { deep: true })
</script>
<style lang="scss">
.el-dialog {
  background: #f2f2f2;
}
.invoice-dialog {
  font-family: Noto Sans SC;
  font-size: 14px;
  font-weight: 400;
  font-family: Product Sans;
  text-align: left;

  max-width: 620px;
  width: 100% !important;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  background: #f2f2f2;

  .el-form-item__error {
    font-size: 12px;
  }
  .el-dialog__header {
    background: #f2f2f2;
    border-radius: 24px 24px 0 0;
    position: relative;
    margin-right: unset;
    padding-left: unset;
    padding-right: unset;
    .el-dialog__headerbtn {
      right: 0;
    }
  }

  .el-dialog__header::after {
    content: '';
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #0000000f;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  .el-dialog__body {
    background: #f2f2f2;
    padding-top: 24px;
    padding-left: unset;
    padding-right: unset;
    padding-right: 0;
  }

  .el-dialog__footer {
    background: #f2f2f2;
    border-radius: 0px 0px 15px 15px;
    padding-top: 32px;
    padding-bottom: 32px;
  }
  .el-dialog__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    text-align: left;
  }
}
</style>
<style lang="scss" scoped>
:deep(.el-dialog) {
  background: #f2f2f2;
}

.invoice-dialog {
  background: #f2f2f2;
}

.invoce-dialog-wrapper {
  width: 500px;
  font-family: Product Sans;
  .inovice-baseInfo-wrapper {
    display: flex;
    justify-content: space-between;

    .right-info {
      display: flex;
      align-items: center;

      .money_num {
        .num {
          background: linear-gradient(92.83deg, #2f37ff 0%, #7b4bff 100%);
          // -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: Product Sans;
          font-size: 40px;
          font-weight: 700;
          line-height: 48.52px;
          text-align: right;
        }
      }
    }
  }
  :deep(.el-form) {
    max-width: 100%;
    font-family: Product Sans;
    gap: 16px;
    border-radius: 10px;
    border: 1px;
    margin-top: unset !important;
    .invoice-form-title {
      font-size: 16px;
      font-weight: 700;
      line-height: 23.17px;
      text-align: left;
      max-width: 100%;
      position: relative;
      padding-bottom: 12px;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;

        border: 1px solid #f0f0f0;
        left: 0;
      }
    }

    .core-form-wrapper {
      padding: 16px 24px 24px 24px;
      background: #ffffff;
      border-radius: 10px;
      margin-top: unset;
      .first-form-item {
        margin-top: 16px;
      }
      .el-form-item__label {
        max-width: 100px;
        width: 20%;
        display: flex;
        justify-content: flex-start;
      }
      .input-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        margin-bottom: 9px !important;
        .el-form-item__content {
          width: 100%;

          .el-input__wrapper {
            border-radius: 8px;
            height: 40px;
          }
        }
      }
      .el-form-item__content {
        .el-input__wrapper {
          border-radius: 8px;
          height: 40px;
        }
      }
    }
  }
}
.invoice-dailog-footer {
  .submit,
  .cancel {
    max-width: 182px !important;
    height: 40px;
    padding: unset !important;
    width: 30%;
    border-radius: 8px;
  }
  .submit {
    background: #9874ff;
  }
}
.ar-SA {
  .invoice-dailog-footer {
    display: flex;
    gap: 12px;
  }

  .invoce-dialog-wrapper :deep(.el-form) .core-form-wrapper .el-form-item__label {
    width: 30%;
    max-width: 120px;
  }
}

@media screen and (max-width: 1500px) {
  .ko-KR,
  .es-ES {
    .invoce-dialog-wrapper {
      :deep(.el-form) {
        .core-form-wrapper {
          .el-form-item__label {
            max-width: 120px;
            width: 25%;
            display: flex;
            justify-content: flex-start;
            font-size: 13px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .invoce-dialog-wrapper {
    :deep(.el-form) {
      .core-form-wrapper {
        .el-form-item__label {
          max-width: 120px;
          width: 25%;
          display: flex;
          justify-content: flex-start;
          // font-size: 11px !important;
        }

        .el-form-item__error {
          font-size: 10px !important;
          width: 180%;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.invoice-confirm-box {
  width: 80%;
  max-width: 430px;
  height: 205px;
  border-radius: 16px;
  .el-message-box__header {
    .el-message-box__title {
      font-family: Product Sans;
      font-size: 16px;
      font-weight: 700;
      line-height: 19.41px;
      text-align: left;
    }
  }
  .el-message-box__btns {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    padding-top: 30px;
    .el-button {
      width: 40%;
      max-width: 138px;
      height: 40px;
      border-radius: 8px;
    }
  }
}

.invoce-dialog-wrapper .el-form .core-form-wrapper .el-form-item__label {
  justify-content: flex-end !important;
  flex-direction: row-reverse;
}
@media screen and (min-width: 550px) {
}
@media screen and (max-width: 500px) {
  .invoice-dialog {
    width: 96% !important;
    .invoce-dialog-wrapper .el-form .core-form-wrapper .el-form-item__label {
      width: 120px;
    }
  }
}
</style>
