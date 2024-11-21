
<script setup lang="ts">
import type { IEmployee, IResponse } from '~/types';



definePageMeta({
    middleware: ["is-auth"]
});

const { user } = useAuth();
const route = useRoute();

const employees = ref<IEmployee[]>([]);

const getEmployees = async (department: string) => {
    // isLoading.value = true;
    let response = await $fetch<IResponse<{}, IEmployee[]>>(apify("employees") + `?department=${department}`, {
        headers: {
            "Authorization": `Token ${user.value?.token}`
        }
    });
    if (response.status === "success") {
        employees.value = response.data;
    }
    // isLoading.value = false;
}

onMounted(() => {
    getEmployees(route.params.slug.toString());
});
</script>

<template>
    <div class="grid gap-3 p-5 md:p-10">
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <NuxtLink :to="{ name: 'admin' }">Bosh sahifa</NuxtLink>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>
                        Xodimlar
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div class="relative overflow-x-auto">
            <table class="border-separate border-spacing-0 whitespace-nowrap table-fixed">
                <thead class="">
                    <tr class="border">
                        <th class="sticky text-start p-2 border left-0 bg-background">Familiya, Ism va Sharifi</th>
                        <th class="z-[-1] text-start p-2 border" v-for="_ in 30">{{ _ }}-11-2024</th>
                        <th class="sticky right-0 text-start p-2 bg-background border">Jami</th>
                    </tr>
                </thead>
                <tbody class="relative">
                    <tr class="border hover:bg-accent/90" v-for="employee in employees">
                        <td class="p-2 border sticky left-0 bg-background w-32 truncate">{{ employee.full_name }}</td>
                        <td class="p-2 border text-center text-green-500 font-bold" v-for="_ in 30">8</td>
                        <td class="sticky right-0 p-2 border bg-background text-center">345</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
