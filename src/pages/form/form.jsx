import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

// تحديد القيم الخاصة بالأدوار
const currencies = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Manager', label: 'Manager' },
  { value: 'User', label: 'User' },
];

export default function Form() {
  const [open, setOpen] = useState(false);

  // Control the visibility of the snackbar after form submission
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // استخدام React Hook Form للتحكم بالنموذج
  const {
    register, // تسجيل الحقول
    handleSubmit, // التعامل مع الإرسال
    formState: { errors }, // أخذ الأخطاء (إذا وجدت)
  } = useForm();

  // التعامل مع البيانات عند الإرسال
  const onSubmit = (data) => {
    console.log(data);
    // Open Snackbar upon successful submission
    setOpen(true);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)} // Trigger form submission when clicking the button
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      {/* الأسماء (الاسم الأول والاسم الأخير) */}
      <Stack direction={'row'} sx={{ gap: 2, pt: '20px' }}>
        <TextField
          {...register("firstName", { required: "First name is required" })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ''}
        />
        <TextField
          {...register("lastName", { required: "Last name is required" })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ''}
        />
      </Stack>

      {/* حقل البريد الإلكتروني */}
      <TextField
        {...register("email", { required: "Email is required", pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Invalid email address"
        } })}
        label="Email"
        variant="filled"
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
      />

      {/* حقل رقم الهاتف */}
      <TextField
        {...register("phone", {
          required: "Phone number is required",
          pattern: {
            value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
            message: "Invalid Phone number"
          }
        })}
        id="phone"  // This id matches the for attribute in the label
        label="Contact Number"
        variant="filled"
        error={!!errors.phone}
        helperText={errors.phone ? errors.phone.message : ''}
      />

      {/* الحقول الخاصة بالعناوين */}
      <TextField
        label="Address 1"
        variant="filled"
        error={!!errors.address1}
        helperText={errors.address1 ? errors.address1.message : ''}
      />
      <TextField
        label="Address 2"
        variant="filled"
        error={!!errors.address2}
        helperText={errors.address2 ? errors.address2.message : ''}
      />

      {/* حقل اختيار الدور */}
      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
        error={!!errors.role}
        helperText={errors.role ? errors.role.message : ''}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* زر إنشاء مستخدم جديد */}
      <Button type="submit" variant="contained">Create New User</Button>

      {/* Snackbar message on form submission */}
      <Snackbar anchorOrigin={{vertical:"top",horizontal:"right"}} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
          User created successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
