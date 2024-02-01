import React from 'react';

//------// Components //------//
import AnimatedTitle from '../components/titleAnimation';
import DataTable from '../components/data_table';
import { ReactComponent as DownloadIcon } from '../media/svgs/download.svg';
import { ReactComponent as UploadIcon } from '../media/svgs/upload.svg';

//------// Hooks //------//
import useDropdown from '../hooks/useDropdown';


export default function ThirdParty() {
    useDropdown();
    const neutron_overview = [
        {
            id: 0,
            row_title: "You have been given medication of heart burn",
            row_date: "10 jan 2021",
            row_type: "salvatory test",
            row_status: "applying", 
        },
        {
            id: 1,
            row_title: "Dr recommended you to stop drinking cold water",
            row_date: "5 oct 2021",
            row_type: "Blood test",
            row_status: "completed", 
        },
        {
            id: 2,
            row_title: "Dr recommended you to stop drinking cold water",
            row_date: "15 oct 2021",
            row_type: "MRI Scan",
            row_status: "completed", 
        },
    ]
    const my_uploaded_records = [
        {
            id: 0,
            row_title: "You have been given medication of heart burn",
            row_date: "10 jan 2021",
            row_type: "salvatory test",
            row_status: "applying", 
        },
        {
            id: 1,
            row_title: "Dr recommended you to stop drinking cold water",
            row_date: "5 oct 2021",
            row_type: "Blood test",
            row_status: "completed", 
        },
        {
            id: 2,
            row_title: "Dr recommended you to stop drinking cold water",
            row_date: "15 oct 2021",
            row_type: "MRI Scan",
            row_status: "completed", 
        },
    ]
    const clinician_uploaded_records = [
        {
            id: 0,
            row_title: "You have been given medication of heart burn",
            row_date: "10 jan 2021",
            row_type: "salvatory test",
            row_status: "applying", 
        },
        {
            id: 1,
            row_title: "Dr recommended you to stop drinking cold water",
            row_date: "5 oct 2021",
            row_type: "Blood test",
            row_status: "completed", 
        },
        {
            id: 2,
            row_title: "Dr recommended you to stop drinking cold water",
            row_date: "15 oct 2021",
            row_type: "MRI Scan",
            row_status: "completed", 
        },
    ]
    return (
        <div className="medical_record">
            <AnimatedTitle title="Medical Record: 3rd Party Health Providers" />
            <div className="upload_download_block">
                <p>This is where you can upload approved third part health service providers documentation and data</p>
                <div className="upload_download_buttons">
                    <div className="sl_button upload" data-open-popup="upload">
                        Upload <UploadIcon />
                    </div>
                    <div className="sl_button download" >
                        Download <DownloadIcon />
                    </div>
                </div>
            </div>
            <DataTable
                table_name="My uploaded records"
                date_set={true}
                type_set={true}
                sort_set={true}
                data_rows={my_uploaded_records}
            />
            <DataTable
                table_name="Neutron overview"
                date_set={true}
                type_set={true}
                sort_set={true}
                data_rows={neutron_overview}
            />
            <DataTable
                table_name="Clinician uploaded records"
                date_set={true}
                type_set={true}
                sort_set={true}
                data_rows={clinician_uploaded_records}
            />
        </div>
    )
}