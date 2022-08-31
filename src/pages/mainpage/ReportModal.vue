<template>
    <!-- <button @click="reportBtn" class="reportBtn">
        <span class="reportBtn-text">신고하기</span>
    </button>
    <div v-if="reportModal" class="reportModal position-relative">
        <div class="d-flex justify-content-center position-absolute">
            <div class="report-box p-3">
                <span>신고하기</span>
            </div>
        </div>
    </div> -->
    <!-- Button trigger modal -->

    <button @click="reportBtn" type="button" class="reportBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        신고하기
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="false" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">신고하기</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    input과 textarea 추가하기
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup() {
        const reportModal = ref(false);

        // vuex로 신고버튼 누르면 신고창 닫히게
        const reportBtn = () => {
            reportModal.value == false ? reportModal.value = true : reportModal.value = false
        }

        return {
            reportBtn,
            reportModal
        }
    }
}

</script>
<style lang="sass" scoped>
.report-box
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px
    width: 200px
    height: 100%

.position-absolute
    right: 100px
</style>