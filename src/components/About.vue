<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-col key="tonal" cols="5">
                <v-card class="mx-auto" max-width="344" variant="tonal">
                    <v-card-item>
                        <div>
                            <div class="text-overline mb-1">
                                about
                            </div>
                            <div class="text-h5 mb-1">
                                20231014
                            </div>
                            <div class="text-caption">This is the day to write some words to be displayed on the screen....
                            </div>
                        </div>
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script setup>
const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>