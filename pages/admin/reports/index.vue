<script setup lang="ts">
import { LucideCalendar, LucideTimer } from 'lucide-vue-next';
import { toast } from '~/components/ui/toast';
import type { IAttendance, IDepartment, IResponse } from '~/types';


definePageMeta({
    middleware: ["is-auth"]
});
useHead({
    title: "Hisobotlar"
});


const { user } = useAuth();

const attendance = ref<IAttendance[]>([]);
const departments = ref<IDepartment[]>([]);
const department = ref("0");
const today = new Date();
const date = ref({
    day: today.getDate(),
    era: "AD",
    month: today.getMonth() + 1,
    year: today.getFullYear(),
    toString() {
        return `${this.year}-${this.month}-${this.day}`
    }
});


const getAttendance = async (department: string) => {
    try {
        let response = await $fetch<IResponse<{}, IAttendance[]>>(apify("employees/attendance")+`?day=${date.value.day}&&month=${date.value.month}&&year=${date.value.year}&&department=${department}`, {
            headers: {
                "Authorization": `Token ${user.value?.token}`
            }
        });

        if (response.status === "success") {
            attendance.value = response.data;
        } else {
            toast({
                title: "Xatolik",
                description: "Adminga murojat qiling. [ga500]"
            });
        }
    } catch {

    }
}

const getDepartments = async () => {
    try {
        let response = await $fetch<IResponse<{}, IDepartment[]>>(apify("employees/departments"), {
            headers: {
                "Authorization": `Token ${user.value?.token}`
            }
        });

        if (response.status === "success") {
            departments.value = response.data;
        } else {
            toast({
                title: "Xatolik",
                description: "Adminga murojat qiling"
            });
        }
    } catch {
        toast({
            title: "Xatolik",
            description: "Adminga murojat qiling"
        });
    }
}

const updateDate = async (value: any) => {
    date.value = value;
    getAttendance(department.value);
}

let interval: string | number | NodeJS.Timeout | undefined;

onMounted(async() => {
    getAttendance(department.value);
    getDepartments();
    interval = setInterval(() => {
        getAttendance(department.value);
    }, 5000);
});

onUnmounted(() => {
    clearInterval(interval);
});

watch(department, (newValue) => {
    getAttendance(department.value);
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
        <div class="flex gap-3">
            <Select default-value="0" v-model="department">
                <SelectTrigger>
                    <SelectValue placeholder="Bo'limni tanlang" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">Barcha bo'limlar</SelectItem>
                    <SelectItem v-for="department in departments" :value="department.id">{{ department.name }}</SelectItem>
                </SelectContent>
            </Select>
            <Popover>
                <PopoverTrigger>
                    <Button>
                        <LucideCalendar />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar @update:model-value="updateDate" />
                </PopoverContent>
            </Popover>
        </div>
        <div class="w-full">
            <Tabs default-value="kelganlar" class="w-full overflow-auto">
                <TabsList>
                    <TabsTrigger value="kelganlar">Kelganlar</TabsTrigger>
                    <TabsTrigger value="kelmaganlar">Kelmaganlar</TabsTrigger>
                </TabsList>
                <TabsContent value="kelganlar" class=" overflow-auto">
                    <div class="grid gap-3 col-span-2">
                        <p class="font-bold">
                            <span class="text-green-500">Kelganlar</span>
                            <span> / </span>
                            <span class="text-orange-500">Kechikganlar</span>
                        </p>
                        <div class="border rounded-md overflow-auto">
                            <Table class="whitespace-nowrap w-[calc(100%-3rem)]">
                                <TableHeader class="border-b">
                                    <TableHead>ID</TableHead>
                                    <TableHead>Familiya Ism</TableHead>
                                    <TableHead class="whitespace-wrap w-4">Bo'limi</TableHead>
                                    <TableHead class="border-l text-center">Holati</TableHead>
                                    <TableHead class="text-center">Vaqt</TableHead>
                                    <TableHead class="border-l text-center">Holati</TableHead>
                                    <TableHead class="border-r text-center">Vaqt</TableHead>
                                    <TableHead>Bino</TableHead>
                                </TableHeader>
                                <TableBody>
                                    <TableRow v-for="a, index in attendance.filter((v) => v.attendance_access !== 'did_not_come')">
                                        <TableCell>{{ index+1 }}</TableCell>
                                        <TableCell>{{ a.full_name }}</TableCell>
                                        <TableCell>
                                            <p class="w-64 truncate">{{ a.department.name }}</p>    
                                        </TableCell>
                                        <TableCell class="border-l text-center">
                                            <span v-if="a.attendance_access === 'arrived'" class="text-green-500">Kelgan</span>
                                            <span v-else-if="a.attendance_access === 'failed'" class="text-orange-500">Xatolik</span>
                                            <span v-else-if="a.attendance_access === 'late'" class="text-orange-500">Kech qolgan</span>
                                        </TableCell>
                                        <TableCell class="text-center font-semibold">
                                            <span v-if="a.attendance_access === 'arrived'" class="text-green-500">{{ a.attendance_access_time }}</span>
                                            <span v-else-if="a.attendance_access === 'failed'" class="text-orange-500">{{ a.attendance_access_time }}</span>
                                            <span v-else-if="a.attendance_access === 'late'" class="text-orange-500">{{ a.attendance_access_time }}</span>
                                        </TableCell>
                                        <TableCell class="border-l text-center">
                                            <span class="text-green-500" v-if="a.attendance_output === 'at_work'">Ishda</span>
                                            <span class="text-orange-500" v-else-if="a.attendance_output === 'failed'">Xatolik</span>
                                            <span class="text-green-500" v-else-if="a.attendance_output === 'gone'">Ketgan</span>
                                        </TableCell>
                                        <TableCell class="border-r text-center">{{ a.attendance_output_time }}</TableCell>
                                        <TableCell>{{ a.attendance_access_area }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="kelmaganlar">
                    <div class="flex flex-col gap-3">
                        <p class="text-red-500 font-bold">Kelmaganlar</p>
                        <div class="border rounded-md">
                            <Table>
                                <TableHeader class="border-b">
                                    <TableHead>Familiya Ism</TableHead>
                                    <TableHead>Holati</TableHead>
                                </TableHeader>
                                <TableBody>
                                    <TableRow v-for="a in attendance.filter((v) => v.attendance_access === 'did_not_come')">
                                        <TableCell>{{ a.full_name }}</TableCell>
                                        <TableCell>Kelmagan</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </div>
</template>
