import React from 'react';
import { Grid, Card, CardContent, CardHeader, LinearProgress } from "@mui/material";

function Dashboard() {
    const employees = [
        { name: 'John Doe', progress: 60 },
        { name: 'Jane Smith', progress: 80 },
        { name: 'Bob Johnson', progress: 40 },
    ];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
                <Card>
                    <CardHeader title="Team Progress" />
                    <CardContent>
                        <LinearProgress variant="determinate" value={70} />
                    </CardContent>
                </Card>
            </Grid>
            {employees.map((employee) => (
                <Grid item xs={12} sm={6} lg={3} key={employee.name}>
                    <Card>
                        <CardHeader title={employee.name} />
                        <CardContent>
                            <LinearProgress variant="determinate" value={employee.progress} />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Dashboard;
