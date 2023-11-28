<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col key="tonal" cols="5">
                <v-card class="mx-auto" max-width="344" variant="tonal">
                    <v-card-item>
                        <div class="greet">
                            <h3 v-if="user">Welcome {{ user }}</h3>
                            <h3 v-else>You are not logged in</h3>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup>

const props = defineProps({
    user: String,
    token: Object
})

</script>