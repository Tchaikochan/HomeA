﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class enquete : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banco = new DataBase();

            string Title = Request["t"].ToString();
            if (Title == "" || Title == null)
            {
                return;

            }
            string DS = Request["d"].ToString();
            if (DS == "" || DS == null)
            {
                return;

            }
            string CS = Request["s"].ToString();
            if (CS == "" || CS == null)
            {
                return;

            }
            string Condominio = Request["c"].ToString();
            if (Condominio == "" || Condominio == null)
            {
                return;

            }

            int Counter = 0;
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.getCommand("SELECT * Enquete");
            while (Banco.Selected.Read())
            {
                Counter++;

            }
            Banco.setCommand("INSERT INTO Enquete VALUES('" + Title + "','" + DS + "',CURRENT_TIME()," + Counter + ")");

        }
    }
}